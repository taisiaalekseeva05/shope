<template>
    <button 
        v-if="type ==='button'"
        :class=" [
            'btn',
            {
                'btn--primary': color === 'primary',
                'btn--secondary': color === 'secondary',
                'btn--lightgray': color === 'lightgray',
                'btn--fullwidth': mobileFullWidth,
            },
        ]"
    >   
        <slot />
    </button>
    <NuxtLink 
        v-else 
        :to="to"
        :class=" [
            'btn',
            {
                'btn--primary': color === 'primary',
                'btn--secondary': color === 'secondary',
                'btn--lightgray': color === 'lightgray',
                'btn--fullwidth': mobileFullWidth,  
            },
        ]"
    >         
        <slot />

    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    background: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        default: 'button',
    },
    to: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        default: 'primary',
    },
    mobileFullWidth: {
        type: Boolean,
        default: false, 
    }

})
</script>

<style lang="scss" scoped>
.btn {
    padding: 0 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    font-size: 16px;
    height: 56px;
    text-decoration: none;
    white-space: nowrap;
    @media screen and (max-width: 767px) {
        padding: 0 15px;
        font-size: 15px;
    }
    &:hover{
        opacity: 0.8;
    }
    &--primary {
        background: var(--primary);
        color: #fff;
    }
    &--secondary {
        background: rgba(249, 249, 249, 0.15);
        color: #fff;
    }
    &--lightgray {
        background: #f9f9f9;
        color: var(--primary);
    }
    &--white {
        background: #fff;
        color: var(--primary);
    }
    &--fullwidth {
        @media screen and (max-width: 767px){
            width: 100%; 
        }
    }
}
</style>