<script lang="ts">
import GithubIcon from "$lib/icons/github-icon.svelte";
import InstagramIcon from "$lib/icons/instagram-icon.svelte";
import GoogleIcon from "$lib/icons/google-icon.svelte";
import TwitterIcon from "$lib/icons/twitter-icon.svelte";
</script>
<footer class="section">
    <div class="flex flex-wrap justify-between">
        <div class="space-y-4">
            <h3 class="text-2xl">
                <a href="https://mig.adamstd.my.id" class="footer__logo">MIG</a>
            </h3>
            <p class="text-lg">We give you many conveniences</p>
        </div>

      



        <div class="footer__content">
            <h3 class="footer__title ">Social</h3>
            <div class="flex gap-5 my-2">

                <a href="mailto:adamsetiadijr07@gmail.com" target="_blank">
                    <GoogleIcon  class="size-5" />
                </a>
                <a href="https://github.com/madamroger007" target="_blank">
                    <GithubIcon class="size-5"/>
                </a>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://www.instagram.com/adamstdi._" target="_blank">
                    <InstagramIcon class="size-5"/>
                </a>
                <a href="https://x.com/Madamroger007" target="_blank">
                    <TwitterIcon class="size-5"/>
                </a>
            </div>
            </div>
        </div>

    <p class="text-center text-lg py-5">&#169; 2025 Madamroger. All right reserved</p>
</footer>