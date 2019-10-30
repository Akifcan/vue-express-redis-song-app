<script type="text/javascript">
	export default{
		data(){
			return{
				songName: '',
				author: '',
				iframe: '',
			}
		},
		computed:{
			lastInsertId(){
				return this.$store.getters.lastInsertId
			}
		},
		methods: {
			onSubmit(){
				const send={
					'songName': this.songName,
					'author': this.author,
					'iframe': this.iframe
				}
				this.$store.dispatch('add', send)
			}
		},
		destroyed(){
			this.$store.commit('clearLastInsertId')
		}
	}
</script>

<template>
	<div class="container mt-5">
		<router-link :to="{name: 'search'}">Search Song</router-link>
		<div class="alert alert-info" v-if='lastInsertId'>
			<p>
				Your song added successfully. Song id is <b>{{ lastInsertId }}</b>
				<router-link :to="{name: 'detail', params: {'id': lastInsertId}}" tag='a'>
					Go to link
				</router-link>
			</p>
		</div>
		<form @submit.prevent='onSubmit()'>
			<div class="form-group">
				<label>Song Name</label>
				<input type="text" class="form-control" placeholder="Song Name" v-model='songName'>
			</div>
			<div class="form-group">
				<label>Author</label>
				<input type="text" class="form-control" placeholder="Author" v-model='author'>
			</div>
			<div class="form-group">
				<textarea class="form-control" placeholder="Iframe" v-model='iframe'></textarea>
			</div>
			<button class="btn btn-primary" :disabled='!songName || !author || !iframe'>Save</button>
		</form>
	</div>
</template>