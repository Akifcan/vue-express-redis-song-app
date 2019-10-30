<script type="text/javascript">
	export default{
		created(){
			this.$store.dispatch('songDetail', this.$route.params.id)
		},
		computed: {
			detail(){
				return this.$store.getters.detail
			}
		}
	}
</script>

<template>
	<div class="container mt-5">
		<div class="card">
			<h3 class="card-title p-3">{{ detail.songName }}</h3>
			<div class="card-body">
				<div v-html='detail.iframe'></div>
			</div>
			<p class="card-footer">{{ detail.author }}</p>
		</div>
	</div>
</template>