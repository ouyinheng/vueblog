<template>
    <div class="ripple" ref="ripple">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'rippleout',
    methods: {
        getRipple(e){
            let $this = e.target;
            let event = e || window.event;
            let x = event.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + event.clientX;  
            let y = event.pageY || document.documentElement.scrollTop + document.body.scrollTop + event.clientY;  
            let wx = $this.offsetWidth; 
            x = x - $this.offsetLeft - wx / 2;  
            y = y - $this.offsetTop - wx / 2;  
            var ripple = document.createElement('span');  
            ripple.className = 'ripple';  
            var firstChild = $this.firstChild;  
            if (firstChild) {  
                $this.insertBefore(ripple, firstChild);  
            } else {  
                $this.appendChild(ripple);  
            };  
            ripple.style.cssText = 'width: ' + wx + 'px;height: ' + wx + 'px;top: ' + y + 'px;left: ' + x + 'px';  
            ripple.classList.add('rippleEffect');  
        }
    }
}
</script>

<style lang="scss" scoped>
    .ripple {
       &:hover {
           background: rgba(0,0,0,0.3);
       }
    }

</style>
