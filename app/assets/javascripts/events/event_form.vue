<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="form">
          <div class="form__block">
            <label class="form__label">Session Title</label>
            <input class="form__text width-50"  type="text" v-model="event.title">
          </div>
          <div class="form__block">
            <label class="form__label">Describe your Session</label>
            <textarea class="form__text width-50"  type="text" v-model="event.description"/>
          </div>
          <div class="form__block">
            <label class="form__label">Session starts at</label>
            <input class="form__text width-50"  type="text" v-model="event.startAt">
          </div>
          <div class="form__block">
            <label class="form__label">Session ends at</label>
            <input class="form__text width-50"  type="text" v-model="event.endAt">
          </div>
          <div class="form__block">
            <label class="form__label">Live Straming Link</label>
            <input class="form__text width-50"  type="text" v-model="event.movieLink">
          </div>
          <div class="form__block">
            <button class="form__submit" @click="send()">Submit</button>
            <span style="text-decoration: underline; float: right;" @click="fill()">fill dummy data</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eventForm from './event_form';

  export default eventForm;
</script>
