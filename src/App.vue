<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <div class="side-bg-color">
          <label>ประเภทของการ์ด</label>
          <br>
          <img />
          <br>
          <label>ผู้รับ</label>
          <p>dddd</p>
          <p></p>
          <p></p>
          <p></p>
          <br>
          <label>ข้อความ</label>
          <p></p>
          <br>
          <label>แพ็คเกจที่เลือก</label>
          <p></p>
          <p></p>
          <label>รวมทั้งหมด</label>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<style>
  .side-bg-color {
    background-color: #267D5C;
    color: white;
  }
  p {
    color: yellow;
  }
</style>
