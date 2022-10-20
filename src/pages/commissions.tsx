import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head"
import { NextPageWithLayout } from "types/global"

const Commissions: NextPageWithLayout = () => {
  
    return (
      <>
      <Head title="Commissions" description="Custom-order art" />
        <div>Hello Commissions</div>
          {/* decompose this into multiple components for gallery */}
       
        <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        <div className="w-full rounded hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
        <div className="w-full rounded hover:opacity-50">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
        <div className="w-full rounded hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"/>
        </div>
    </div>
        {/* feel decompose */}
      </>
   
    )
  }
  
Commissions.getLayout = (page) => <Layout>{page}</Layout>
  
export default Commissions
  