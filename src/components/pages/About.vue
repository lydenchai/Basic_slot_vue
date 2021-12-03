<template>
  <div class="container">
    <div class="create-new">
      <button>Add +</button>
    </div>
   <div class="search">
     <input type="text" placeholder="Search...">
     <button>Search</button>
   </div>
   <card v-for="item of items" :key="item.name">
       <div class="content">
          <h1>{{item.name}}</h1>
          <p>{{item.description}}</p>
       </div>
       <div class="action">
         <button class="delete">Delete</button>
          <button class="edit">edit</button>
       </div>
   </card>
  </div>
</template>
<script>
export default {
 data() {
     return {
         items: [
             {
                name: "Book",
                description: "To use the Font Awesome icons, add the following line inside the"
             },
             {
                name: "Pen",
                description: "To use the Font Awesome icons, add the following line inside the"
             },
             {
                name: "Ruler",
                description: "To use the Font Awesome icons, add the following line inside the"
             }
         ]
     }
 }
};
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
.action {
  padding: 10px;
}
.action button {
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
  border:none;
}
.delete {
  background: red;
  color: #fff;
}
.edit {
  background: orange;
  color:#ffffff;
}
.search {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

}
.search input {
  padding: 10px;
  width: 80%;
}
.search button {
  width: 20%;
  background: orange;
  border:none;
  padding: 12px;
  color: #fff;
}
.create-new {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}
.create-new button {
  padding: 12px;
  border:none;
  color: #fff;
  width: 20%;
  background: #0a81d1;
}
h1 {
  color: #0a81d1;
  font-weight: 500;
  font-size: 25px;
}
</style>
