<template>

    <!-- <div class="loader-container"><div class="loader"></div></div> -->
    <div class="loader">
        <div class="circle circl1"></div>
        <div class="circle circl1"></div>
        <div class="circle circl1"></div>

    </div>
</template>

<style lang="scss" scoped>
.loader {
    height: 100px;
    width: 100px;
    // margin-bottom: 50px;
    display: flex;
    justify-content: center;
    position: relative;
    perspective: 800px;
    filter: blur(2px);
     
}
.circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid green;
    border-radius: 50%;
    border-left: none;
    border-right: none;
}
.circ1 {
    animation: circ1 1.5s linear infinite;
    border-color: red;
}
.circ {
    animation: circ2 1.5s linear infinite;
    border-color: yellow;
}
.circ3 {
    animation: circ3 1.5s linear infinite;
    border-color: green;
}
@keyframes circ1 {
    0% {
        transform: rotateX(45deg) rotateY(45deg) rotateZ(0);
    }
    100% {
        transform: rotateX(45deg) rotateY(45deg) rotateZ(360deg);
    }
}
@keyframes circ2 {
    0% {
        transform: rotateX(60deg) rotateY(0deg) rotateZ(0);
    }
    100% {
        transform: rotateX(60deg) rotateY(0deg) rotateZ(360deg);
    }
}
// @keyframes circ3 {
//     0% {
//         transform: rotateX(-45deg) rotateY(45deg) rotateZ(0);
//     }
//     100% {
//         transform: rotateX(-45deg) rotateY(45deg) rotateZ(360deg);
//     }
// }
.loader::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: blue;
    border-radius: 50%;
    // top: calc(50% - 15px);
    // left: calc(50% -15px);
}



// .loader {
//     animation: rotate 1s infinite;
//     height: 50px;
//     width: 50px;
//     margin-bottom: 50px;
//     &-container {
//         display: flex;
//         justify-content: center;
//     }
// }
// .loader:before,
// .loader:after {
//     border-radius: 50%;
//     content: "";
//     display: block;
//     height: 20px;
//     width: 20px;
// }
// .loader:before {
//     animation: ball1 1s infinite;
// }

</style>