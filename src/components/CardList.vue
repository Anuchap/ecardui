<template>
    <div>
        <div class="row">
            <h4>เลือกประเภทของการ์ด</h4>
            <card v-for="c in cards" :key="c.cardId" :name="c.name" :src="c.imagePath" @click.native="pickCard(c)" :class="{ 'my-gray': c.cardId === formData.card.cardId }" />
        </div>
        <div class="row">
            <h4>กรุณากรอกข้อมูล</h4>
            <div class="col-md-6">
                <div class="my-gray my-box">
                    <label>ผู้ส่ง</label>
                    <form>
                        <div class="form-group">
                            <label>ชื่อ</label>
                            <input type="name" class="form-control" v-model="formData.fromName">
                        </div>
                        <div class="form-group">
                            <label>อีเมลล์</label>
                            <input type="email" class="form-control" v-model="formData.fromEmail">
                        </div>
                        <div class="form-group">
                            <label>เบอร์โทร</label>
                            <input type="text" class="form-control" v-model="formData.fromTel">
                        </div>
                        <div class="form-group">
                            <label>ที่อยู๋</label>
                            <textarea class="form-control" v-model="formData.fromAddress"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="my-gray my-box">
                    <label>ผู้รับ</label>
                    <form>
                        <div class="form-group">
                            <label>ชื่อ</label>
                            <input type="name" class="form-control" v-model="formData.toName">
                        </div>
                        <div class="form-group">
                            <label>อีเมลล์</label>
                            <input type="email" class="form-control" v-model="formData.toEmail">
                        </div>
                        <div class="form-group">
                            <label>เบอร์โทร</label>
                            <input type="text" class="form-control" v-model="formData.toTel">
                        </div>
                        <div class="form-group">
                            <label>ที่อยู๋</label>
                            <textarea class="form-control" v-model="formData.toAddress"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <br/>
            <div class="col-md-6">
                <div class="form-group">
                    <label>ข้อความถึงผู้รับ</label>
                    <textarea class="form-control" v-model="formData.message"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <button class="btn btn-success pull-right" @click="next">NEXT</button>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import storage from '../storage';

import mock from '../mock';

export default {
    components: {
        card: Card
    },
    data() {
        return {
            cards: mock.cards,
            formData: {
                card: {},
                fromName: '',
                fromEmail: '',
                fromTel: '',
                fromAddress: '',
                toName: '',
                toEmail: '',
                toTel: '',
                toAddress: '',
                message: ''
            }
        };
    },
    methods: {
        next() {
            console.log(this.formData);
            // call api log 
            storage.save(this.formData);

            this.$router.push('package');

        },
        pickCard(card) {
            this.formData.card = card;
        }
    }
}
</script>

<style scoped>
label, h1, h2,h3,h4,h5 {
    color: #267D5C;
}
.my-box {
    padding: 10px;
}
.my-gray {
    background-color: #EEEEEE;
}
</style>


