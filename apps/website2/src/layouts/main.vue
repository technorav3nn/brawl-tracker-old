<script setup lang="ts">
import Navbar from "$components/layout/Navbar";
import { Container } from "styled-system/jsx";
</script>

<template>
	<Navbar />
	<Container flex="1" maxW="7xl">
		<slot />
	</Container>
</template>
