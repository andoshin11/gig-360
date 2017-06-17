<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1 index">
        <div class="index-left">
          <div class="section-header">Discover</div>
          <div class="discover">
            <div class="discover__event">
              <div class="discover__event__left">
                <iframe id="ytplayer" type="text/html" width="403" height="226" src="http://www.youtube.com/embed/tprAemaHQyQ" frameborder="0"/>
              </div>
              <div class="discover__event__right">
                <a class="discover__event__title" href="#">From the Ashes - 360 VR live video</a>
                <div class="discover__event__description">Epic Live Music is proud to present the first in an ongoing series of 360 VR live experiences, brought to you by VRscape. Today we join Stoner Rock/Blues band From the Ashes in their Rehearsal studio. </div>
                <div class="discover__event__watch-num">2258 views</div>
                <div class="discover__event__watch-later"><i class="fa fa-clock-o"></i></div>
              </div>
            </div>
          </div>
          <div class="section-header">Your Feed</div>
          <div class="events">
            <div class="events__event" v-for="event in events">
              <div class="events__event__left">
                <iframe id="ytplayer" type="text/html" width="403" height="226" :src="embedUrl(event.movieLink)" frameborder="0"/>
              </div>
              <div class="events__event__right">
                <a class="events__event__title" :href="eventUrl(event)">{{ event.title }}</a>
                <div class="events__event__description">{{ event.description }}</div>
                <div class="events__event__watch-num">{{ random() }} views</div>
                <div class="events__event__watch-later"><i class="fa fa-clock-o"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div class="index-right">
          <div class="section-header">Activities</div>
          <div class="activities">
            <div class="activity" v-for="activity in activities">
              <div class="activity__left">
                <img :src="activity.user.thumbnail" alt="" class="activity__thumbnail">
              </div>
              <div class="activity__right">
                <div class="activity__info">{{ activity.user.name }}</div>
                <div class="activity__content">{{ activity.content }}</div>
                <div class="activity__like"><i class="fa fa-heart-o"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import indexField from './index_field';

  export default indexField;
</script>
