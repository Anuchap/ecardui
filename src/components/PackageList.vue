<template>
  <div>

    <div class="row">
      <h4 class="my-green">เลือกแพ็คเกจ</h4>
      <div v-for="p in packages" :key="p.packageCategoryId">
        <h4>{{p.name}}</h4>
        <div v-for="p2 in p.packageTypes" :key="p2.packageTypeId">
          <label>- {{p2.name}}</label>
          <div v-for="p3 in p2.packages" :key="p3.packageId">
            <div class="checkbox">
              &nbsp;&nbsp;&nbsp;
              <label><input type="checkbox" v-model="p3.checked">{{p3.name}} - {{p3.price}}</label>
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

      formData: storage.get(),
    }
  },
  methods: {
    next() {
      let pkgs = [];
      for (let i = 0; i < this.packages.length; i++) {
        for (let j = 0; j < this.packages[i].packageTypes.length; j++) {
          for (let k = 0; k < this.packages[i].packageTypes[j].packages.length; k++) {
            if (this.packages[i].packageTypes[j].packages[k].checked)
              pkgs.push(this.packages[i].packageTypes[j].packages[k]);
          }
        }
      }

      console.log(pkgs);

      this.formData.packages = pkgs;

      storage.save(this.formData);
      // call log api
      this.$router.push('preview');
    }
  }
}
</script>

<style scoped>
.my-green {
  color: #267D5C;
}

label {
  font-weight: bold;
}
</style>

