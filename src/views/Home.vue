<template>
	<div class="home">
		<ul>
			<li v-for="(item, index) in linkList" :key="index">
				<router-link :to="item.href">
                    {{item.title}}
                </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			linkList: [
                { title: '吐司', href: '/toast' }
            ],
		};
	},
};
</script>
<style lang="scss">

</style>
