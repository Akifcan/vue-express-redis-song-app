<script type="text/javascript">
	export default{
		data(){
			return{
				search: '',
			}
		},
		methods:{
			onSubmit(){
				this.$router.push({name: 'detail', params: {'id': this.search}})
			}
		}
	}
</script>

<template>
	<div class="container mt-5">
		<form @submit.prevent='onSubmit()'>
			<div class="form-group">
				<label class="lead">Search</label>
				<input type="text" class="form-control" v-model='search'>
			</div>
			<button :disabled='!search' class="btn btn-primary">Search</button>
			<router-link :to="{name: 'add'}" tag='button' class='btn btn-primary'>Add Song</router-link>
		</form>
	</div>
</template>