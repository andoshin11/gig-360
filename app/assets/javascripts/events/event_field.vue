<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 event">
        <div class="event-left">
          <div class="event__video">
            <iframe id="ytplayer" type="text/html" width="806" height="453" :src="embedUrl(event.movieLink)" frameborder="0"/>
          </div>
          <div class="event__info">
            <div class="event__title">{{ event.title }}</div>
            <div class="event__description">{{ event.description }}</div>
            <div class="event__date">
              <span class="event__start-at">{{ event.startAt }}</span> -
              <span class="event__end-at" @click="stop = true">{{ event.endAt }}</span>
            </div>
          </div>
          <input type="text" v-model="chatMessage" class="type-field" placeholder="type your comment here..." @keyup.enter="addComment()">
          <div class="event__chat chat">
            <div class="comment" v-for="comment in comments">
              <div class="comment__left">
                <img :src="comment.user.thumbnail" alt="" class="comment__thumbnail">
              </div>
              <div class="comment__right">
                <div class="comment__info">{{ comment.user.name }}</div>
                <div class="comment__content">{{ comment.content }}</div>
                <div class="comment__actions">
                  <span class="comment__reply">Reply</span>
                  <span class="comment__likes">{{ comment.likes }}</span>
                  <span class="comment__up" @click="comment.likes++"><i class="fa fa-thumbs-up"></i></span>
                  <span class="comment__down"><i class="fa fa-thumbs-down"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="event-right">
          <div class="event__user user">
            <div class="user__image">
              <img src="https://andoshin11.github.io/static/img/profile.3283734.jpg" alt="">
            </div>
            <div class="user__name">Shin Ando</div>
            <div class="user__stats">
              <div class="user__stats__stat">
                <i class="fa fa-user"></i>
                <div>40,563</div>
              </div>
              <div class="user__stats__stat">
                <i class="fa fa-play"></i>
                <div>7,983</div>
              </div>
              <div class="user__stats__stat">
                <i class="fa fa-heart"></i>
                <div>4,200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eventField from './event_field';

  export default eventField;
</script>
