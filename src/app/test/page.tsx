export default function TestPage() {
  return (
    <div style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", color: "white" }}>Test Page Works!</h1>
      <p style={{ color: "#94a3b8", marginTop: "1rem" }}>
        If you can see this, the app is rendering correctly.
      </p>
      <p style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
        TAWK ID: {process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ? "Set" : "Not set"}
      </p>
      <p style={{ color: "#94a3b8", marginTop: "0.5rem" }}>
        TAWK Widget: {process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ? "Set" : "Not set"}
      </p>
    </div>
  );
}
