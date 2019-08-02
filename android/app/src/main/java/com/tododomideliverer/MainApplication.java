package com.tododomideliverer;

import android.support.annotation.Nullable;
import com.reactnativenavigation.NavigationApplication;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactPackage;
import com.horcrux.svg.SvgPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.marianhello.bgloc.react.BackgroundGeolocationPackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
     @Override
     public boolean isDebug() {
          return BuildConfig.DEBUG;
     }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            new ReactNativeConfigPackage(),
            new SvgPackage(),
            new SplashScreenReactPackage(),
            new BackgroundGeolocationPackage(),
            new ReactNativeOneSignalPackage(),
            new AsyncStoragePackage()
        );
    }

    @Nullable
    @Override
    public String getJSMainModuleName() {
      return "index.android";
    }
}
