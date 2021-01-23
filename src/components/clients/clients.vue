<template>
  <div
    class="d-flex align-items-center text-light text-center flex-column mt-5 mt-xl-8"
  >
    <h1 class="font-weight-normal px-xl-6 fs-52">
      {{ $t("clients") }}
    </h1>
    <div
      class="w-100 flex-column d-flex flex-lg-row justify-content-center align-items-center"
    >
    <div class="d-flex flex-lg-row flex-column justify-content-center width-80">
      <div class="d-flex flex-column width-30 mx-lg-3 align-items-center align-items-lg-end">
        <div class="card bg-warning clientCard width-83 px-lg-5 px-3 py-15 mt-3" >
          <div class="d-flex align-items-center py-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/1664/0dc1/2a055c78a67003b018f22d24fb03e964?Expires=1611532800&Signature=HHD3rgn8HseArGIL2YMMjaEOhRrHLsjyeLQnPL9hHEt0Lq02dkQ-8X1wQ3JwRLVz7B9WFcbZ30NbKKGhcQQCaAwFN8vSOtGx9eLnTF~ACG6lTDdPcZC5hukcVcTDADKV7umJm~QgKwp9Da8JeTHJ2LLB0A81lHTv22BRtW4sC3fs859vO1jj3NKYevA~ed3fVqcnf6E-8IHJ-EZmRPpQJHwTA9XRUaEHzRRCKXz-5OMGh9lKZ-VBpsvQt~k0eBX9~qbG1g6lmjPD6G8wfCrTk6eFkx7ZmjdRtnAK~ezZxZluPbs5iJgftY5kVoMgUT2JQjSv1mwd3rnd46dXq8YbdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center align-items-center mx-4"
            >
              <p class="mb-0">Clair Bell</p>
              <p class="mt-1 mb-0">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class="text-left font-weight-normal fs-16 lh-32">
            {{ $t("clientCard") }}
          </h1>
        </div>
        <div class="card bg-warning mt-3 clientCard width-83 px-lg-5 px-3 py-15 mt-3">
          <div class="d-flex align-items-center py-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/b170/d098/6ffd2bedd0502693c4b159f2edb6f5f3?Expires=1611532800&Signature=MVHrABY7cu553tjz~2pkdYeAHgvRToSpA18DKxqVRjPaMMVhAnujERwIJOAwZAvoBSQ1x-E4dZDLr2dmRDHE9CBJjdjLwWJwSi7X9Yh10PM0t0xlRTWW~CvDOzBZKfqrtyrWsgFeVnqEdNpGQiB4oTAy65JpvRKAPZVYY73H-jH69Zvei5C12KucxUW9jN4wgb-m6RoSUsB161PEw4ZRRbbtzBiFNnrC3SeMMG94flm3bdklOy4dEp8xicYZB8HuGpfBDEAeA-jZPa7QWsWST7wRJGWgp9ptfe-vmMwsfHdgZg01s4DCOv5FVHnV3wMC61DWJjAjXbMIuJC2kihyog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center align-items-center mx-4"
            >
              <p class="mb-0 ml-1">Ralph Fisher</p>
              <p class="mt-1 mb-0 mr-3">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class=" text-left font-weight-normal fs-16 lh-32">
            {{ $t("clientCard") }}
          </h1>
        </div>
      </div>
      <div class="d-flex flex-column width-30 align-items-center align-items-lg-start">
        <div class="card bg-warning clientCard width-83 px-lg-15 px-3 py-15 mt-3">
          <div class="d-flex align-items-center py-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1611532800&Signature=dPFNYXCinzGx6sEexM0xCRCVhr50T9jnFx0X56owEuVb05qrbQSc9JqgXnJHwx2sniFO0HuBi2P6vEYl~rzDoSgC63msi01BoapMK1knIGvUAEg4DT1JdAvgx~fej9Vu0rcSONn7vkYaDzIoN8xEw1KWX-mJTtOpHcK~dSYk8WSp-eqRQK2XaOC-RGzHWwN4Co~CPi5mIL~C0d8hEUcoz8a-SebkpIvrZ6UW~rUPnZe91-l94uuyxzUkUgbbc5z-uwOl~Qx0gE0E5wsHDyB7nBWf4Vdc6xmTb2NwszDVU50Mfbh2qSCPOc8BB1-8UzxgbrsTv0nnPDYYd5RAy4tBWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center text-left align-items-center mx-4"
            >
              <p class="mb-0 ml-2">Franciso Lane</p>
              <p class="mt-1 mb-0 mr-4">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class="text-left font-weight-normal fs-16 lh-32">
            {{ $t("clientCardHuge") }}
          </h1>
        </div>
        <div class="card bg-warning clientCard  width-83 px-lg-15 px-3 py-15 mt-3">
          <div class="d-flex align-items-center py-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/5fb0/a0fb/ba3c0c89bc4199d6dd2885aad8cee018?Expires=1611532800&Signature=IPc1bHiS80AgzdtEYP0CwKXmKewAI9PnMKS8N5fVBq~J8JdTqAQ6E4ZzBTPQFDqmfw3ZFHeZi-U4JUPTrZY-AeWK65QrdlGMfEzIKJXeIGXkN4K3Xx0qMF6Zte8lfXbRdv8POcVovdlIRG4pvQd4mbG0f~~Up8YZmXMHMdd7yPNtBmQq7e9kqJbli0WDDRMP7-EeuC3X7ePB-agHyHKz9foeoQYCcBWRD2lSBIR~3asS2bkZIFbs-atjo1g5EYb1C30eCLFqFgv7PauFHLwjtdONmbrzoGvnAcq7BsI~VLU~c0kkRvGox3M2n9~ykDe4dl0u~ANOBGZjdo6oCHBr~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center align-items-center mx-4"
            >
              <p class="mb-0 ml-2">Jorge Murphy</p>
              <p class="mt-1 mb-0 mr-4">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class="text-left font-weight-normal fs-16 lh-32">
            {{ $t("clientCard") }}
          </h1>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Clients",
};
</script>
<style scoped>
.clientCard {
  border: 1px solid #eab939;
  border-radius: 12px;
}
</style>