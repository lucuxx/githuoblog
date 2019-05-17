<template>
    <div id="commons" :style="{width:width}">
        <div class="commonsHeard" style="font-weight:bold;font-size:18px;text-indent:1em;">
            
            <slot name="commonsHeard">{{title}}</slot>
        </div>
        <div class="commonsContent">
            <slot name="commonsContent"></slot>
        </div>
        <div class="commonsFoot">
            <slot name="commonsFoot"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            width:{
                default:"100%",
            },
             title:{
            default:'提示'
        }
           
        }  
    }
</script>

<style lang="scss" scoped>
    #commons{
        position:relative;
        min-height:200px;
        border-radius:5px;
        box-shadow:0 0 5px 5px rgb(206, 201, 201);
    }

    .commonsHeard{
        width:100%;
        height:40px;
        background:blanchedalmond;
        line-height:40px;
    }

    .commonsContent{
        margin-bottom:44px;
    }

    .commonsFoot{
        position:absolute;
        bottom:-45px;
        left:0;
        width:100%;
        height:40px;
    }  

</style>