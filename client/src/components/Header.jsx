import React from 'react'

const Header = () => {
  return (
    <section className='flex items-center justify-center w-full h-full p-2'>
      <div className='flex items-center justify-center w-full h-full'>
        <div className='flex items-center justify-center gap-4 w-full h-full'>
          <ul>
            <li>Docs</li>
            <li>Flow</li> 
          </ul>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 55.4 48" class="hero__workos-icon"><g fill="rgba(0, 0, 0, 1)"><path d="M0 24c0 1.1.3 2.1.8 3l9.7 16.8c1 1.7 2.5 3.1 4.4 3.7 3.6 1.2 7.5-.3 9.4-3.5l2.3-4.1-9.2-16L27.2 7l2.3-4c.7-1.2 1.6-2.2 2.7-3h-15c-2.6 0-5.1 1.4-6.4 3.7L.8 21c-.5.9-.8 1.9-.8 3z"></path><path d="M55.4 24c0-1.1-.3-2.1-.8-3L44.8 4C42.9.7 39-.7 35.4.5c-1.9.6-3.4 2-4.4 3.7L28.7 8 38 24l-9.8 16.9-2.3 4.1c-.7 1.2-1.6 2.2-2.7 3h15.1c2.6 0 5.1-1.4 6.4-3.7l10-17.3c.4-.9.7-1.9.7-3z"></path></g></svg>
        </div>
        <div className='flex items-center justify-center gap-4 w-full h-full'>
          <ul>
            <li>ExecutionStates</li>
            <li>Examples</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header;
