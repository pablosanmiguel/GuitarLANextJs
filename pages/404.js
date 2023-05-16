import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
   return (
      <Layout
         title="Página No Encontrada"
      >
         <p className="error">Página No encontrada</p>
         <Link className="error-enlace" href="/">Ir a Inicio</Link>
      </Layout>
   )
}
