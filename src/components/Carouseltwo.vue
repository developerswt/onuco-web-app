<template>
	<div>

	</div>
</template>
  
<script>
export default {
	name: 'CarouseltwoView'
}
</script>
  
<style scoped>
.icon-cards {
	position: relative;
	width: 60vw;
	height: 40vw;
	max-width: 700px;
	max-height: 250px;
	margin: 0 auto;
	color: white;
	perspective: 1000px;
	transform-origin: center;
	top: 100px;
}

.icon-cards__content {
	position: absolute;
	width: 100%;
	height: 100%;
	transform-origin: center;
	transform-style: preserve-3d;
	transform: translateZ(-30vw) rotateY(0);
	animation: carousel 10s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

.icon-cards__content.step-animation {
	animation: carousel 8s infinite steps(1) forwards;
}

.icon-cards__item {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 250px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
	border-radius: 6px;
	transform-origin: center;
}

.icon-cards__item:nth-child(1) {

	transform: rotateY(0) translateZ(35vw);
}

.icon-cards__item:nth-child(2) {

	transform: rotateY(120deg) translateZ(35vw);
}

.icon-cards__item:nth-child(3) {

	transform: rotateY(240deg) translateZ(35vw);
}

@keyframes carousel {

	0%,
	17.5% {
		transform: translateZ(-35vw) rotateY(0);
	}

	27.5%,
	45% {
		transform: translateZ(-35vw) rotateY(-120deg);
	}

	55%,
	72.5% {
		transform: translateZ(-35vw) rotateY(-240deg);
	}

	82.5%,
	100% {
		transform: translateZ(-35vw) rotateY(-360deg);
	}
}

html,
body {
	height: 100%;
}

body {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: #110f15;
}

.checkbox {
	position: relative;
	margin-top: 2rem;
	font-size: 0.9rem;
	font-weight: bold;
	text-transform: uppercase;
	color: #f47956;
	transition: color 0.3s ease;
	user-select: none;
}

.checkbox:hover {
	color: #f7a95a;
}

.checkbox__checkbox {
	position: relative;
	top: 0;
	width: 1.0625rem;
	height: 1.0625rem;
	background: white;
	border: 1px solid currentColor;
	border-radius: 4px;
	vertical-align: middle;
	transition: background 0.1s ease;
	cursor: pointer;
}

.checkbox__checkbox::after {
	content: '';
	position: absolute;
	top: 1px;
	left: 5px;
	width: 5px;
	height: 11px;
	opacity: 0;
	transform: rotate(45deg) scale(0);
	border-right: 2px solid #fff;
	border-bottom: 2px solid #fff;
	transition: all 0.3s ease;
	transition-delay: 0.15s;
}

.checkbox__label {
	margin-left: 5px;
	vertical-align: middle;
	cursor: pointer;
}

.checkbox>input:checked~.checkbox__checkbox {
	border-color: transparent;
	background: #f47956;
	animation: jelly 0.6s ease;
}

.checkbox>input:checked~.checkbox__checkbox:after {
	opacity: 1;
	transform: rotate(45deg) scale(1);
}

@keyframes jelly {
	from {
		transform: scale(1, 1);
	}

	30% {
		transform: scale(1.25, 0.75);
	}

	40% {
		transform: scale(0.75, 1.25);
	}

	50% {
		transform: scale(1.15, 0.85);
	}

	65% {
		transform: scale(0.95, 1.05);
	}

	75% {
		transform: scale(1.05, 0.95);
	}

	to {
		transform: scale(1, 1);
	}
}

.child_class {
	padding: 20px;
	margin: 0 auto;
	background: transparent linear-gradient(180deg, #E6BAFF 0%, #5E69FF 100%) 0% 0% no-repeat padding-box;
	border-radius: 8px;
	height: 250px;
}

.child_class_one {
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ff00cc;
	background: -webkit-linear-gradient(to right, #333399, #ff00cc);
	background: linear-gradient(to right, #333399, #ff00cc);
	color: white;
	height: 250px;
	width: 100%;
	border-radius: 8px;
}

.child_class_two {
	background: #000428;
	background: -webkit-linear-gradient(to top, #004e92, #000428);
	background: linear-gradient(to top, #004e92, #000428);
	color: white;
	height: 250px;
	width: 100%;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.merged_block[data-v-e19d716d] {
	border: 1px solid white;
	border-radius: 30px;
	padding: 4px;
}


#carousel_input[data-v-e19d716d] {

	width: 100%;
	border: none;
	outline: none;
	background: transparent;
	padding: 10px 0px 0px 10px;
}


#carousel_button[data-v-e19d716d] {
	height: 45px;
	padding: 0px 50px 0px 50px;
	background: white;
	color: #0066CC;
	border-radius: 22px;
	float: right;

}

@media(max-width: 1024px) {
	.icon-cards {
		display: none;
	}
}

#carousel_input::placeholder {
	color: white;
}

.right_carousel_block {
	margin-top: 20px;
}
</style>