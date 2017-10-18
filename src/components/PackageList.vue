<template>
  <div>
    <h1>Select Package</h1>
    <div class="row">
      <div v-for="p in packages" :key="p.packageCategoryId">
        <h4>{{p.name}}</h4>
        <div v-for="p2 in p.packageTypes" :key="p2.packageTypeId">
          <h4>{{p2.name}}</h4>
          <div v-for="p3 in p2.packages" :key="p3.packageId">
            <div class="checkbox">
              <label><input type="checkbox" value="">{{p3.name}} - {{p3.price}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <button class="btn btn-success pull-right" @click="next">NEXT</button>
    </div>
  </div>
</template>

<script>
import storage from '../storage';
import mock from '../mock';

export default {
  data() {
    return {
      packages: mock.packages,
      formData: storage.get()
    }
  },
  methods: {
    next() {
      storage.save(this.formData);
      // call log api
      this.$router.push('preview');
    }
  }
}
</script>
