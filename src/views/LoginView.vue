<template>
 
 <div class="wrapper">
  <aside class="floatLeft">
    
    <div class="bounce"><img src="https://i.ibb.co/SJFdSg2/html-css-roboi.png" altstyle='height: 100%; width: 100%; object-fit: contain'/></div>
    
  </aside>
    <aside class="floatRight">
      
      <h1>Sign-in to VCPL Robotics</h1>
      <form>
       <input type="text" placeholder="Email" name="uname" required>
      <input type="password" placeholder="Password" name="psw" required>
      <button type="submit">Let's Go!</button>
      </form>
      
    </aside>
    </div>

</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>
body {
  display: flex;
  border: 2px solid gray;
}

.wrapper {
  display: flex;
  padding: 5rem;
  margin: 5rem;
  border: 2px solid lightgray;
  border-radius: 25px; 
  overflow: auto;
  box-shadow: rgb(227, 227, 227) 5px 5px 2px 1px;
}

.floatLeft {
  background: none;
  border-right: 1px solid lightgray;
  margin-left: 5rem;
}

.floatRight {
  background: none;
  margin-left: 5rem;
}

.floatRight h1 {
  font-size: 5vh
}

.bounce {
  position: relative;
  top:5rem;
  right: 5rem;
  animation: bounce 5s ease infinite;
}

@keyframes bounce {
  70% { transform:translateY(0%);}
  80% { transform:translateY(-30%);}
  90% { transform:translateY(0%);}
  95% { transform:translateY(-15%);}
  
}

.bounce img {
  background-size: cover;
}

input[type=text], input[type=password] {
  width: 100%;
  margin: 8px 0;
  padding: 8px;
  border: 2px solid lightgray;
  border-radius: 25px;
}


button {
  background-color: #003057;
  margin: 8px 0;
  border-radius: 25px;
  padding: 8px;
  border: none;
  width: 100%;
  color: white;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>