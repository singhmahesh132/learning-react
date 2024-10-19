import React from 'react'

function Card({username = "Default", designation = "Will use this value in case value is not provided in the tag", location = "Default"}) 
// The values passed a props can be used hear in two ways.
//1. one way is using props.username where we make use of the props keyword.
//2. second way is by directly using the variables in format : {username}. 
  //You can also assign default value to these variables like in line 3. If empty passed from props then these def values will be used
{
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="mx-auto" src="https://images.unsplash.com/photo-1564938494116-8438db956ef1?q=80&w=2867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
            </p>
          </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
          {username}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            {designation} : {location}
          </div>
        </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Card