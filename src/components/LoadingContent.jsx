import React from 'react'

const loadingContent = () => {
  return (
    <div className='h-[400px] bg-[#fee7d5] text-[#f26d35] flex flex-col items-center justify-center'>
        <h1>Downloading ...</h1>
        <div className='w-[100px] h-[200px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#F26D35" stroke="#F26D35" stroke-width="15" width="30" height="30" x="25" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></rect><rect fill="#F26D35" stroke="#F26D35" stroke-width="15" width="30" height="30" x="85" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></rect><rect fill="#F26D35" stroke="#F26D35" stroke-width="15" width="30" height="30" x="145" y="85"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></rect></svg>

        </div>
    </div>
  )
}

export default loadingContent
