import React from 'react';
import Image from 'next/image';
export default function Main() {
  return (
    <section className="py-15 mt-20">
      {/* Title section */}
      <div className="flex items-center justify-center">
        <div className="size-40 h-16 bg-purple-600 rounded-l-full mr-4"></div>
        <div className="bg-yellow-500 px-60 py-4 -skew-x-10">
          <h1 className="text-4xl font-bold text-purple-600">Devops Training</h1>
        </div>
        <div className="size-40 h-16 bg-purple-600 rounded-r-full ml-4"></div>
      </div>

      {/* Center Image */}
      <div className="flex justify-center items-center">
        <Image src="/images/layer_5.png" width={550} height={550} alt="" className="relative top-60 left-7" />
      </div>

      {/* Left Side Technologies */}
       <div className="relative top-50">
        <div className="flex flex-col items-center absolute -top-110 left-135">
          <Image src="/images/ansible.png"  width={60} height={60} alt=""  />
          <h2 className="text-purple-500 font-bold">Ansible</h2>
          <p className="text-yellow-400 text-center">
            Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
          </p>
          <Image src="/images/left-arrow_copy_4.png" width={20} height={20} alt="" />
        </div>

        <div className="flex flex-col items-center absolute left-135 top-20">
           <Image src="/images/left-arrow_copy_5.png" width={20} height={20} alt="" /> 
          <Image src="/images/kubenetes.png" width={60} height={60} alt="" />
          <h2 className="text-purple-500 font-bold">Kubernetes</h2>
          <p className="text-yellow-400 text-center">
            Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
          </p>
        </div>

        <div className="relative -left-130 -top-95">
          <div className="flex flex-col items-center mb-20">
            <Image src="/images/terraform.png" alt="" width={60} height={60} />
            <h2 className="text-purple-500 font-bold">Terraform</h2>
            <p className="text-yellow-400 text-center">
              Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
            </p>
             <Image src="/images/left-arrow_copy_2.png" width={150} height={150} alt="" className="relative -top-20 left-60" /> 
          </div>

          <div className="flex flex-col items-center mb-20">
            <Image src="/images/docker.png" width={60} height={60} alt="" />
            <h2 className="text-purple-500 font-bold">Docker</h2> 
            <p className="text-yellow-400 text-center">
              Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
            </p>
             <Image src="/images/left-arrow_copy_6.png" width={150} height={150} alt="" className="relative -top-30 left-35" />
          </div>

          <div className="flex flex-col items-center mb-20">
            <Image src="/images/kibana.png" width={60} height={60} alt="" />
            <h2 className="text-purple-500 font-bold">Kibana</h2>
            <p className="text-yellow-400 text-center">
              Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
            </p>
             <Image src="/images/left-arrow_copy.png" alt="" width={200} height={200} className="relative -top-50 left-45" /> 
          </div>
        </div>

        {/* Right Side Technologies */}
         <div className="flex flex-col justify-end absolute -top-100 right-5">
          <div className="flex flex-col items-center mb-20">
            <Image src="/images/jenkins_2.png" width={60} height={60} alt="" />
            <h2 className="text-purple-500 font-bold">Jenkins</h2>
            <p className="text-yellow-400 text-center">
              Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
            </p>
             <Image src="/images/left-arrow_copy_3.png" alt="" width={150} height={150} className="relative -top-30 -left-35" /> 
          </div>

          <div className="flex flex-col items-center mb-20">
            <Image src="/images/logstash.png" width={60} height={60} alt="" />
            <h2 className="text-purple-500 font-bold">Logstash</h2>
            <p className="text-yellow-400 text-center">
              Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
            </p>
             <Image src="/images/left-arrow_copy_8.png" alt="" width={100} height={100} className="relative -left-30 -top-40" /> 
          </div>

          <div className="flex flex-col items-center mb-20">
            <Image src="/images/elasticsearch.png" width={60} height={60} alt="" />
            <h2 className="text-purple-500 font-bold">Elasticsearch</h2>
            <p className="text-yellow-400 text-center">
              Lorem ipsum dolor sit, am<br />et consectetur adipisicing elit.
            </p>
            <Image src="/images/left-arrow.png" alt="" width={150} height={150} className="relative -left-40 -top-50" /> 
          </div>
        </div> 
      
       </div> 
     <p className='text-center max-w-5xl mx-auto font-2xl mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio voluptatum debitis amet vitae odio consequuntur inventore quod, placeat officiis nesciunt aliquam quae molestias accusamus facere architecto, aspernatur cumque est atque earum sed pariatur hic quos esse. At iste consectetur porro, nostrum ipsam harum nemo ducimus voluptate assumenda quos eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in omnis obcaecati rerum. Praesentium repellat ullam obcaecati alias, commodi unde sequi explicabo autem eius velit facere vitae deleniti tenetur animi cumque quam et id reiciendis. Sint est quis, veritatis reiciendis eveniet ex aliquid sit sapiente, excepturi incidunt, illo quod amet!</p>
    </section>
  );
}
