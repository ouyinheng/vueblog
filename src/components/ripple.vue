<template>
    <button class="btn btn-default ripple-effect" ref="ripple">点击波纹</button>
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
    .ripple-effect {
        position: relative;
        overflow: hidden;
    }
    
    .btn {
        width: 150px;
        height: 40px;
        border: 1px solid #d9d9d9;
        outline: none;
        background: #008DC5;
        color: #fff;
    }
    
    .ripple {
        border-radius: 50%;
        background: rgba(0, 0, 0, .5);
        -webkit-transform: scale(0);
        transform: scale(0);
        position: absolute;
        opacity: 1;
    }
    
    .rippleEffect {
        -webkit-animation: rippleEffect 2s cubic-bezier(0.23, 1, 0.32, 1);
        animation: rippleEffect 2s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .btn-primary .ripple {
        background: rgba(0, 0, 0, .1);
    }
    
    @keyframes rippleEffect {
        100% {
            -webkit-transform: scale(2);
            transform: scale(2);
            opacity: 0;
        }
    }

</style>
