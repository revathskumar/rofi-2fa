rofi-2fa
======================

    A rofi plugin for Two-Factors Authentication / Time-Based Authentication Token / TOTP /  Google Authenticator 


### Dependencies

#### On ubuntu

```
sudo apt install rofi xdotool
```

### Setup

Create file named `2fa.yml` in your home directory and add apps in the format

```yml
apps:
  - label: Google
    secret: NUYJ2UDBUNZIQGDE
  - label: Amazon
    secret: NUYJ2UDBUNZIQGDF
  - label: Slack
    secret: NUYJ2UDBUNZIQGDG
```

### Installation

```
npm install -g rofi-2fa
```


License
-------
Please see [License](https://github.com/revathskumar/rofi-2fa/blob/master/License)
