# React WC

ReactでWebComponentsを使えるようにするサンプル

## input

``` html
<wc-button
  html-type="button"
  disabled={false}
  loading={true}
  theme="primary"
  size="base"
  block={true}
>Button</wc-button>
```

## output

``` html
<wc-button
  html-type="button"
  disabled="false"
  loading="true"
  theme="primary"
  size="base"
  block="true"
  class="hydrated"
>
  #shadow-root (open)
    <button type="button" class="relative inline-flex items-center border border-transparent shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2, bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 px-4 py-2 text-sm rounded-md flex flex-row justify-center w-full"><slot></slot><span class="absolute inset-y-0 right-0 flex flex-row justify-center items-center px-4"><svg class="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></span></button>
  Button
</wc-button>
```

![](https://user-images.githubusercontent.com/51122255/128993166-2f71256c-95c4-467e-a4f0-e8bf02db5905.png)

