<template>
    <div>
        <h1>Choose Card</h1>
        <div class="row">
            <card v-for="c in cards" :key="c.cardId" :name="c.name" :src="c.imagePath" @click.native="pickCard(c)" :class="{ 'picked-card': c.cardId === formData.card.cardId }" />
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4>Sender</h4>
                <form>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="name" class="form-control" v-model="formData.fromName">
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="formData.fromEmail">
                    </div>
                    <div class="form-group">
                        <label>Tel:</label>
                        <input type="text" class="form-control" v-model="formData.fromTel">
                    </div>
                    <div class="form-group">
                        <label>Address:</label>
                        <textarea class="form-control" v-model="formData.fromAddress"></textarea>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <h4>Receiver</h4>
                <form>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="name" class="form-control" v-model="formData.toName">
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="formData.toEmail">
                    </div>
                    <div class="form-group">
                        <label>Tel:</label>
                        <input type="text" class="form-control" v-model="formData.toTel">
                    </div>
                    <div class="form-group">
                        <label>Address:</label>
                        <textarea class="form-control" v-model="formData.toAddress"></textarea>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label>Message:</label>
                <textarea class="form-control" v-model="formData.message"></textarea>
            </div>
        </div>
        <div class="row">
            <button class="btn btn-success pull-right" @click="next">NEXT</button>
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

<style>
.picked-card {
    border: 1px solid red;
}
</style>


