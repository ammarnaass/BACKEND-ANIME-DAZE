/**
 * Anime Slayer & Anime Watch Grade Multi-Host Resolver & Stream Parser
 * Converts external host links (Mega, Dropbox, 4Shared, Google Drive, Mediafire, etc.)
 * into direct-playable or clean embed stream URLs without popup ads.
 */

export interface ResolvedServerInfo {
  provider: "hls" | "mega" | "dropbox" | "4shared" | "gdrive" | "mediafire" | "vidmoly" | "okru" | "streamtape" | "mp4upload" | "custom";
  type: "hls" | "mp4" | "embed" | "mega" | "dash";
  defaultName: string;
  directUrl: string;
  category: "streaming" | "download" | "both";
  quality: string;
}

export function detectProvider(url: string, explicitProvider?: string): ResolvedServerInfo["provider"] {
  if (explicitProvider && [
    "hls", "mega", "dropbox", "4shared", "gdrive", "mediafire", "vidmoly", "okru", "streamtape", "mp4upload", "custom"
  ].includes(explicitProvider)) {
    return explicitProvider as ResolvedServerInfo["provider"];
  }

  const lower = url.toLowerCase();
  if (lower.includes("mega.nz") || lower.includes("mega.io")) return "mega";
  if (lower.includes("dropbox.com") || lower.includes("dropboxusercontent.com")) return "dropbox";
  if (lower.includes("4shared.com")) return "4shared";
  if (lower.includes("drive.google.com") || lower.includes("docs.google.com")) return "gdrive";
  if (lower.includes("mediafire.com")) return "mediafire";
  if (lower.includes("ok.ru") || lower.includes("odnoklassniki")) return "okru";
  if (lower.includes("vidmoly")) return "vidmoly";
  if (lower.includes("streamtape")) return "streamtape";
  if (lower.includes("mp4upload")) return "mp4upload";
  if (lower.includes(".m3u8")) return "hls";
  return "custom";
}

export function resolveStreamUrl(url: string, qualityHint?: string): ResolvedServerInfo {
  const provider = detectProvider(url);
  const quality = qualityHint || "1080p FHD";

  let directUrl = url.trim();
  let type: ResolvedServerInfo["type"] = "hls";
  let defaultName = "سيرفر البث المباشر";
  let category: ResolvedServerInfo["category"] = "both";

  switch (provider) {
    case "dropbox": {
      defaultName = `سيرفر دروب بوكس السريع (${quality})`;
      type = "mp4";
      category = "both";
      // Convert standard dropbox sharing link to direct media stream URL
      if (directUrl.includes("dropbox.com")) {
        // Replace www.dropbox.com with dl.dropboxusercontent.com or force raw=1
        try {
          const parsed = new URL(directUrl);
          parsed.searchParams.delete("dl");
          parsed.searchParams.set("raw", "1");
          directUrl = parsed.toString();
        } catch {
          directUrl = directUrl.replace("?dl=0", "?raw=1").replace("&dl=0", "&raw=1");
          if (!directUrl.includes("raw=1")) {
            directUrl += directUrl.includes("?") ? "&raw=1" : "?raw=1";
          }
        }
      }
      break;
    }

    case "mega": {
      defaultName = `سيرفر ميجا الخارق (${quality})`;
      type = "mega";
      category = "both";
      // Convert file link to embed player if needed
      // Format: https://mega.nz/file/ID#KEY -> https://mega.nz/embed/ID#KEY
      if (directUrl.includes("/file/")) {
        directUrl = directUrl.replace("/file/", "/embed/");
      }
      break;
    }

    case "gdrive": {
      defaultName = `سيرفر جوجل درايف (${quality})`;
      category = "both";
      type = "embed";
      // Extract Google Drive ID
      const match = directUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) || directUrl.match(/id=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        directUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
      }
      break;
    }

    case "4shared": {
      defaultName = `سيرفر فورشيرد المباشر (${quality})`;
      type = "embed";
      category = "both";
      // 4Shared video embed format:
      // https://www.4shared.com/video/ID/file.html -> https://www.4shared.com/web/embed/file/ID
      const match = directUrl.match(/\/video\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        directUrl = `https://www.4shared.com/web/embed/file/${match[1]}`;
      }
      break;
    }

    case "mediafire": {
      defaultName = `سيرفر ميديا فاير (${quality})`;
      type = "mp4";
      category = "download"; // mediafire is primarily high-speed download
      break;
    }

    case "vidmoly": {
      defaultName = `سيرفر فيدمولي (${quality})`;
      type = "embed";
      category = "streaming";
      if (directUrl.includes("/w/")) {
        directUrl = directUrl.replace("/w/", "/embed-");
      }
      break;
    }

    case "okru": {
      defaultName = `سيرفر أوكي رو (${quality})`;
      type = "embed";
      category = "streaming";
      const match = directUrl.match(/video\/([0-9]+)/);
      if (match && match[1]) {
        directUrl = `https://ok.ru/videoembed/${match[1]}`;
      }
      break;
    }

    case "streamtape": {
      defaultName = `سيرفر ستريم تيب (${quality})`;
      type = "embed";
      category = "streaming";
      if (directUrl.includes("/v/")) {
        directUrl = directUrl.replace("/v/", "/e/");
      }
      break;
    }

    case "mp4upload": {
      defaultName = `سيرفر إم بي فور أبلود (${quality})`;
      type = "embed";
      category = "streaming";
      const match = directUrl.match(/([a-zA-Z0-9]+)\.html/);
      if (match && match[1]) {
        directUrl = `https://www.mp4upload.com/embed-${match[1]}.html`;
      }
      break;
    }

    case "hls": {
      defaultName = `سيرفر الأسطورة فائق السرعة (${quality})`;
      type = "hls";
      category = "streaming";
      break;
    }

    default: {
      const lower = directUrl.toLowerCase();
      if (lower.includes(".m3u8")) {
        type = "hls";
        defaultName = `سيرفر HLS المباشر (${quality})`;
      } else if (lower.includes(".mpd")) {
        type = "dash";
        defaultName = `سيرفر DASH التكيفي (${quality})`;
      } else if (lower.includes(".mp4")) {
        type = "mp4";
        defaultName = `سيرفر MP4 المباشر (${quality})`;
      } else {
        type = "embed";
        defaultName = `سيرفر البث البديل (${quality})`;
      }
      break;
    }
  }

  return {
    provider,
    type,
    defaultName,
    directUrl,
    category,
    quality,
  };
}
