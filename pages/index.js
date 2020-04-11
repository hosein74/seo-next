import ProductList from "../components/ProductList"
import '../assets/index.scss'
const Index = (props) => {
  return (
    <div className="app">
     
      <Head>
      <meta name="description" content="Buy beautiful, high quality carpets for your home."/>
        <title>Beautiful, high quality carpets | CarpetCity</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css" />
      </Head>
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.4/default/snipcart.js"></script>
      <div hidden id="snipcart" data-api-key="<your-public-api-key>"></div>
    </div>
  )
}
Index.getInitialProps = async () => {
  return {
    products: [
      { id: "nextjs-seo_carpet1", name: "Straight and Narrow", price: 25.0, image: "static/straight-and-narrow.jpg", description: "Revitalize your living room with this durable and stain hiding carpet." }
    ]
  }
}
export default Index;