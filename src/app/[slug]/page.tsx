import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:64 relative flex flex-col lg:flex-row gap-16">
      {/*Image Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/*Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="prata-regular text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur dolor consequuntur sunt soluta magnam labore doloremque 
          iure laudantium veritatis porro possimus mollitia minima cumque, 
          officia dolorum facere, pariatur, eos iusto?
        </p>
        <div className="h-[2px] bg-gray-100"/>
        <div className="flex items-center gap-4">
          <h3 className="prata-regular text-xl text-gray-500 line-through">59 QAR</h3>
          <h2 className="prata-regular font-medium text-2xl">49 QAR</h2>
        </div>
        <div className="h-[2px] bg-gray-100"/>
        <CustomizeProducts />
        <Add/>
        <div className="h-[2px] bg-gray-100"/>
        <div className="text-sm">
          <h4 className="prata-regular font-medium mb-4">Title</h4>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur dolor consequuntur sunt soluta magnam labore doloremque 
          iure laudantium veritatis porro possimus mollitia minima cumque, 
          officia dolorum facere, pariatur, eos iusto?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="prata-regular font-medium mb-4">Title</h4>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur dolor consequuntur sunt soluta magnam labore doloremque 
          iure laudantium veritatis porro possimus mollitia minima cumque, 
          officia dolorum facere, pariatur, eos iusto?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="prata-regular font-medium mb-4">Title</h4>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur dolor consequuntur sunt soluta magnam labore doloremque 
          iure laudantium veritatis porro possimus mollitia minima cumque, 
          officia dolorum facere, pariatur, eos iusto?
          </p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
