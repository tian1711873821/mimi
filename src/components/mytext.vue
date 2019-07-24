<template>
    <div style="margin:50px 50px">



      <input type="checkbox" @click="allcheck">全选
      <div class="item1">
        <ul>
          <li v-for="(item,index) in list">
            <div style="display: inline-block;vertical-align: top;margin-top: 100px">
              <input type="checkbox" v-model="checkedValue" :value="index" :checked="true">
            </div>
            <img  width="200px" height="200px;" style="margin: 20px" :src="item.pic" >
            <p style="display: inline-block;vertical-align: top;line-height: 240px;height: 200px;" >{{item.prod_name}}</p>
          </li>
        </ul>
        <p>共计商品几件：{{checkedValue.length}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mytext",
      data(){
          return{
            list:[
              {
                prod_name:"音响",
                pic:"/static/1.jpg"
              },
              {
                prod_name:"蓝牙耳机",
                pic:"/static/2.jpg"
              },
              {
                prod_name:"耳机",
                pic:"/static/3.jpg"
              },
              {
                prod_name:"耳机",
                pic:"/static/4.jpg"
              },
              {
                prod_name:"电宝",
                pic:"/static/5.jpg"
              }
            ],
            ischecked:false,
            num:[],
            istrue:false,
            checkedValue:[],
            answer:[]
          }
      },
      methods:{
        allcheck(){
          this.checkedValue=[]
          this.ischecked=!this.ischecked
          if(this.ischecked==true){
            for (let i=0;i<this.list.length;i++){
              this.checkedValue.push(i)
            }
          }else{
            this.checkedValue=[]
          }
          console.log(this.checkedValue)

        },

      }
    }
</script>

<style scoped>

</style>
