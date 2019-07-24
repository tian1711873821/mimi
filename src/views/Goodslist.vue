<template>
  <div>
    <myHeader></myHeader>
    <myBread></myBread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFiterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filter-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void (0)" :class="{'cur':priceChecked=='all'}" @click="clickall">All</a></dd>
              <dd v-for="(price,index) in priceFilter" @click="setPriceFilter(index)">
                <a href="javascript:void(0)" :class="{'cur':priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodlist">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+item.prodcutImg"></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overlayFlag" @click="closePop"></div>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from '../components/Header'
  import myFooter from '../components/Footer'
  import myBread from '../components/Bread'
  import '../../src/assets/css/base.css'
  import '../../src/assets/css/product.css'
    export default {
        name: "Goodslist",
      data(){
          return{
            goodlist:[],
            priceFilter:[
              {
                startPrice:"0.00",
                endPrice:"500.0"
              },
              {
                startPrice:"500.0",
                endPrice:"1000.0"
              },
              {
                startPrice:"1000.0",
                endPrice:"2000.0"
              }
            ],
            priceChecked:"all",
            filterBy:false,
            overlayFlag:false
          }
      },
      components:{
        myHeader,
        myFooter,
        myBread
      },
      methods:{
        setPriceFilter(index){
          this.priceChecked= index;
          this.closePop()
        },
        clickall(){
          this.priceChecked="all"
          this.closePop()
        },
        getData(){
          this.axios.get('api/goods').then((res)=>{
            res=res.data.data
            this.goodlist=res.result
            console.log(this.goodlist)
          })
        },
        showFiterPop(){
          this.filterBy = true
          this.overlayFlag = true
        },
        closePop(){
          this.filterBy = false
          this.overlayFlag = false
        }
      },
      mounted() {
        this.getData()

      }
    }
</script>

<style scoped>

</style>
