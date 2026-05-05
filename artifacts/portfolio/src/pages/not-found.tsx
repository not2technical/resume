export default function NotFound() {
  return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f9fafb"}}>
      <div style={{maxWidth:448,width:"100%",margin:"0 16px",border:"1px solid #e5e7eb",borderRadius:8,padding:"24px"}}>
        <div style={{display:"flex",gap:8,marginBottom:16,alignItems:"center"}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <h1 style={{fontSize:24,fontWeight:700,color:"#111827",margin:0}}>404 Page Not Found</h1>
        </div>
        <p style={{fontSize:14,color:"#6b7280",margin:0}}>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
