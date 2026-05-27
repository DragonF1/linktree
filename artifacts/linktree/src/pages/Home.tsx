import { profile, sections, modServers, lastUpdated } from "../data";
import type { ModServer } from "../data";
import { toast } from "sonner";

function ServerIcon({ server }: { server: ModServer }) {
  if (server.iconUrl) {
    return (
      <img
        src={server.iconUrl}
        alt={server.name}
        style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
    );
  }
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#2a2a2e",
        border: "1px solid var(--border)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: 700,
        color: "var(--fg-dim)",
        textTransform: "uppercase",
        letterSpacing: "-1px",
      }}
    >
      {server.name.slice(0, 2)}
    </div>
  );
}

function hexToRgba(hex: string | undefined, alpha: number) {
  if (!hex || !/^#[0-9a-fA-F]{6}$/.test(hex)) return `rgba(255,255,255,${alpha})`;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ModCard({ server }: { server: ModServer }) {
  return (
    <a
      href={server.inviteUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        padding: "12px 14px",
        background: "var(--bg-surface2)",
        border: "1px solid var(--border-mod)",
        borderRadius: "6px",
        textDecoration: "none",
        transition: "border-color 0.15s, background 0.15s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = server.accentColor;
        (e.currentTarget as HTMLElement).style.background = hexToRgba(server.accentColor, 0.07);
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mod)";
        (e.currentTarget as HTMLElement).style.background = "var(--bg-surface2)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ServerIcon server={server} />
        <div style={{ minWidth: 0 }}>
          <p style={{ color: "var(--fg-bright)", fontWeight: 500, fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {server.name}
          </p>
          <p style={{ color: "var(--fg-dim)", fontSize: "12px", marginTop: "1px" }}>
            <span style={{ color: "var(--accent-mod)" }}>{server.role}</span>
            {server.since && <span> · since {server.since}</span>}
          </p>
        </div>
      </div>
      <p style={{ color: "var(--fg-mid)", fontSize: "12px", marginTop: "8px", paddingTop: "8px", borderTop: "1px solid var(--border)" }}>
        <span style={{ color: "var(--accent-arrow)" }}>↗</span>{" "}join · {server.members} members
      </p>
    </a>
  );
}

export default function Home() {
  return (
    <div className="page-outer">
      <div className="page-columns">

        {/* ── Main content ── */}
        <main className="page-main">
          <header style={{ marginBottom: "48px" }}>
            <p style={{ color: "var(--accent-prompt)", marginBottom: "16px", fontSize: "13px" }}>$ whoami</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
              {profile.userIcon && (
                <img
                  src={profile.userIcon}
                  alt={profile.displayName || profile.name}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid var(--border)",
                  }}
                />
              )}
              <div>
                <h1 style={{ color: "var(--accent-name)", fontSize: "26px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "3px" }}>
                  {profile.displayName || profile.name}
                </h1>
                {profile.displayName && (
                  <p style={{ color: "var(--accent-prompt)", fontSize: "13px" }}>{profile.name}</p>
                )}
              </div>
            </div>
            <p style={{ color: "var(--fg-bright)", marginBottom: "10px" }}>{profile.tagline}</p>
            <p style={{ color: "var(--fg-dim)", fontSize: "12px" }}>
              been doing this for ~{profile.yearsActive} years
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "38px" }}>
            {sections.map((section) => (
              <section key={section.id}>
                <p style={{ fontSize: "13px", marginBottom: "14px" }}>
                  <span style={{ color: "var(--accent-hash)" }}>## </span>
                  <span style={{ color: "var(--fg-mid)" }}>{section.heading}</span>
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {section.links.map((link, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ color: "var(--accent-arrow)", flexShrink: 0, lineHeight: "22px" }}>→</span>
                      {link.icon && (
                        <img
                          src={link.icon}
                          alt=""
                          style={{ width: "16px", height: "16px", borderRadius: "3px", objectFit: "contain", flexShrink: 0, marginTop: "3px" }}
                        />
                      )}
                      <a
                        href={link.url || "#"}
                        target={link.url && !link.url.startsWith("mailto:") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!link.url) {
                            e.preventDefault();
                            toast("This is private");
                          }
                        }}
                        style={{
                          color: "var(--accent-link)",
                          textDecoration: "underline",
                          textDecorationColor: "transparent",
                          textUnderlineOffset: "3px",
                          transition: "color 0.15s, text-decoration-color 0.15s",
                          flexShrink: 0,
                          lineHeight: "22px",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "var(--accent-link-hover)";
                          el.style.textDecorationColor = "var(--accent-link)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "var(--accent-link)";
                          el.style.textDecorationColor = "transparent";
                        }}
                      >
                        {link.label}
                      </a>
                      {link.description && (
                        <span className="link-description" style={{ color: "var(--fg-dim)", fontSize: "13px", lineHeight: "22px" }}>// {link.description}</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer style={{ marginTop: "64px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
            <span style={{ color: "var(--fg-dim)", fontSize: "12px" }}>/* last updated {lastUpdated} */</span>
          </footer>
        </main>

        {/* ── Moderator sidebar ── */}
        <aside className="page-sidebar">
          <div className="sidebar-sticky">
            <p style={{ fontSize: "12px", marginBottom: "16px" }}>
              <span style={{ color: "var(--accent-hash)" }}>##</span>{" "}
              <span style={{ color: "var(--fg-mid)" }}>Mod Experience</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {modServers.map((server, i) => (
                <ModCard key={i} server={server} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
