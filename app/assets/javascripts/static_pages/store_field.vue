<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 store">
        <div class="section-header">Items from Following Users</div>
        <div class="items">
          <div class="item" v-for="item in items">
            <div class="item__thumbnail">
              <img :src="item.imageUrl" alt="">
            </div>
            <div class="item__info">
              <div class="item__name">{{ item.name }}</div>
              <div class="item__description">{{ item.description }}</div>
              <div class="item__user">Steve Aoki</div>
              <div class="item__price">$ {{ item.price }}</div>
            </div>
          </div>
        </div>
        <div class="section-header">Official Items</div>
        <div class="items">
          <div class="item">
            <div class="item__thumbnail">
              <img src="https://i.gyazo.com/4f9116a03aefdeb392188674f6de2769.jpg" alt="">
            </div>
            <div class="item__info">
              <div class="item__name">Samsung Gear 360</div>
              <div class="item__description">Get the most out of the Galaxy S7 edge.</div>
              <div class="item__user">Samsung</div>
              <div class="item__price">$ 249</div>
            </div>
          </div>
          <div class="item">
            <div class="item__thumbnail">
              <img src="https://theta360.com/ja/about/theta/img/img_s_content3-mv1-s.png" alt="">
            </div>
            <div class="item__info">
              <div class="item__name">RICOH THETA</div>
              <div class="item__description">High-spec model that captures all of the surprises and beauty from 360°</div>
              <div class="item__user">RICOH</div>
              <div class="item__price">$ 249</div>
            </div>
          </div>
              <div class="item">
                <div class="item__thumbnail">
                  <img src="https://i.gyazo.com/7d619abd2db868abc88871117ece8074.jpg" alt="">
                </div>
                <div class="item__info">
                  <div class="item__name">Samsung Gear 360</div>
                  <div class="item__description">Get the most out of the Galaxy S7 edge.</div>
                  <div class="item__user">Samsung</div>
                  <div class="item__price">$ 249</div>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import storeField from './store_field';

  export default storeField;
</script>
