<template>
    <div>
      <header>
        <slot name="header"></slot>
        
      </header>
  
      <main>
        <!-- Ana içerik alanı -->
        <slot></slot>
      </main>
  
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>