import React from 'react'
import GlobalLayout from '../../layouts/GlobalLayout'

const Contact = () => {
  return (
    <GlobalLayout>
      
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div class="grid sm:grid-cols-2 sm:items-center gap-8">
    <div class="sm:order-2">
      <div class="relative pt-[50%] sm:pt-[100%] rounded-lg">
        <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description"/>
      </div>
    </div>
    

    <div class="sm:order-1">
      <p class="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        Business insight
      </p>

      <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
        <a class="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          How to get buy-in and budget for direct hiring
        </a>
      </h2>

      
      <div class="mt-6 sm:mt-10 flex items-center">
        <div class="flex-shrink-0">
          <img class="size-10 sm:h-14 sm:w-14 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        </div>

        <div class="ms-3 sm:ms-4">
          <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
            Louise Donadieu
          </p>
          <p class="text-xs text-gray-500">
            Strategic Marketing Consultant
          </p>
        </div>
      </div>
      

      <div class="mt-5">
        <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Read more
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    </div>
    
  </div>
  
</div>

    </GlobalLayout>
  )
}

export default Contact
