const fs = require('fs');
var path = process.argv.splice(2);

path.forEach(item=>{
	console.log(item)
	create(item)
})



function create(path){
	if(path.length==0){
	    console.log('请输入文件名')
	    return;
	}
	fs.mkdir(path,err=>{
		if(err){
	        console.log('文件夹已存在')
	    } else {
	        console.log('success')
	    }
	})
	let jsData = `<template>
	<div class="${path}">
		${path}
	</div>
</template>

<script>
	export default {
		name: '${path}',
		data(){
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.${path} {

	}
</style>
	`
	fs.appendFile(`${path}/index.vue`,jsData,(err)=>{
	    if(err) {
	        console.log('err',err)
	    } else {
	        console.log('success')
	    }
	})
}