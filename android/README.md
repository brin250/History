`sideload.keystore` signs the Android APK built by `.github/workflows/android.yml`.
It is a sideloading key for this personal study app, not a Play Store key: using the
same key every build lets new versions install over the old one without losing data.
Password: `android`, alias `androiddebugkey`.
