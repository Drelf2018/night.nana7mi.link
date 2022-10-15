<template>
    <a :href="href">
        <div class="link">
            <img :src="src" class="github">
            <div style="display: inline;">
                <strong>{{ title }}</strong><br />
                <span style="color: grey;">{{ subtitle }}</span>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'IconBtn',
    props: {
        href: String,
        src: String,
        title: String,
        subtitle: String
    }
}
</script>

<style>
.link {
    display: flex;
    transition: all 0.1s;
    border-radius: 0.5em;
    box-shadow: 0 2px 5px grey;
}

.link:hover {
    background-color: rgb(245, 245, 245);
    box-shadow: 0 1px 3px grey;
}

.github {
    width: 1em;
    margin: auto 0;
    padding: 0 0.2em;
    font-size: 1.8em;
    transition: all 0.1s;
}
</style>