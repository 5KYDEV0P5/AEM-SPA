# AEM - Single Page Application : ReactJS

[![License](https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://travis-ci.org/5KYDEV0P5/skydevops-mysql.svg?branch=master)](https://travis-ci.org/5KYDEV0P5/skydevops-mysql)

## Description

Building single page application using AEM and ReactJS

## Requirements
- Node 	>= 	10.x.x
- NPM 	>=	6.4.x
- Java 	>=	1.8.0_161
- Maven >=	3.5.x

## AEM - Multi Module Project Setup - Integrating ReactJS with AEM


### STEP-01: Maven Settings File - Adobe Public Repository
This file can be placed in the project directory or at default location ```%HOME%\.m2\settings.xml```, if placed in the different location, whilst compiling pass the ```-s <settings.xml_file_location>```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
<!-- SKYDEVOPS -->
  <pluginGroups></pluginGroups>
  <proxies></proxies>
  <servers></servers>
  <mirrors></mirrors>
  <profiles>
    <profile>
          <id>adobe-public</id>
          <activation>
              <activeByDefault>true</activeByDefault>
          </activation>
          <repositories>
            <repository>
              <id>adobe</id>
              <name>Nexus Proxy Repository</name>
              <url>http://repo.adobe.com/nexus/content/groups/public/</url>
              <layout>default</layout>
            </repository>
          </repositories>
          <pluginRepositories>
            <pluginRepository>
              <id>adobe</id>
              <name>Nexus Proxy Repository</name>
              <url>http://repo.adobe.com/nexus/content/groups/public/</url>
              <layout>default</layout>
            </pluginRepository>
          </pluginRepositories>
      </profile>
  </profiles>
</settings>
```

## Step-02: Setting Up AEM Maven Project - Local Setup

    mvn org.apache.maven.plugins:maven-archetype-plugin:2.4:generate \
     -DarchetypeGroupId=com.adobe.granite.archetypes \
     -DarchetypeArtifactId=aem-project-archetype \
     -DarchetypeVersion=14 \
     -DarchetypeCatalog=https://repo.adobe.com/nexus/content/groups/public/

Where 14 is the archetype version number that you want to use (see archetype versions below).

### Available properties

Name               | Description
-------------------|------------------------------
groupId            | Base Maven groupId
artifactId         | Base Maven ArtifactId
version            | Version
package            | Java Source Package
appsFolderName     | /apps folder name
artifactName       | Maven Project Name
componentGroupName | AEM component group name
contentFolderName  | /content folder name
confFolderName     | /conf folder name
cssId              | prefix used in generated css
packageGroup       | Content Package Group name
siteName           | AEM site name

### Example Properties

Name               | Description
-------------------|------------------------------
groupId            | com.skydevops.aemspa
artifactId         | AEM-SPA
version            | 0.0.1-SNAPSHOT
package            | com.skydevops.aemspa
appsFolderName     | sdspa
artifactName       | SDSPA
componentGroupName | skydevops
contentFolderName  | sdspa
confFolderName     | sdspa
cssId              | sdspa
packageGroup       | skydevops/sdspa
siteName           | SD SPA


### Step-03: Adding React Project [Barebone React Project]

- Execute the following command with in the Maven project root directory

```bash
npx create-react-app react-app
```

- Modified gitignore file **react-app/** and **aemspa/** 

```bash
### Eclipse ###

.metadata
bin/
tmp/
*.tmp
*.bak
*.swp
*~.nib
local.properties
.settings/
.loadpath
.recommenders

# External tool builders
.externalToolBuilders/

# Locally stored "Eclipse launch configurations"
*.launch

# PyDev specific (Python IDE for Eclipse)
*.pydevproject

# CDT-specific (C/C++ Development Tooling)
.cproject

# CDT- autotools
.autotools

# Java annotation processor (APT)
.factorypath

# PDT-specific (PHP Development Tools)
.buildpath

# sbteclipse plugin
.target

# Tern plugin
.tern-project

# TeXlipse plugin
.texlipse

# STS (Spring Tool Suite)
.springBeans

# Code Recommenders
.recommenders/

# Annotation Processing
.apt_generated/

# Scala IDE specific (Scala & Java development for Eclipse)
.cache-main
.scala_dependencies
.worksheet

### Eclipse Patch ###
# Eclipse Core
.project

# JDT-specific (Eclipse Java Development Tools)
.classpath

# Annotation Processing
.apt_generated

.sts4-cache/

### Intellij ###
# Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio and WebStorm
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf

# Generated files
.idea/**/contentModel.xml

# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml

# Gradle
.idea/**/gradle.xml
.idea/**/libraries

# Gradle and Maven with auto-import
# When using Gradle or Maven with auto-import, you should exclude module files,
# since they will be recreated, and may cause churn.  Uncomment if using
# auto-import.
# .idea/modules.xml
# .idea/*.iml
# .idea/modules

# CMake
cmake-build-*/

# Mongo Explorer plugin
.idea/**/mongoSettings.xml

# File-based project format
*.iws

# IntelliJ
out/

# mpeltonen/sbt-idea plugin
.idea_modules/

# JIRA plugin
atlassian-ide-plugin.xml

# Cursive Clojure plugin
.idea/replstate.xml

# Crashlytics plugin (for Android Studio and IntelliJ)
com_crashlytics_export_strings.xml
crashlytics.properties
crashlytics-build.properties
fabric.properties

# Editor-based Rest Client
.idea/httpRequests

# Android studio 3.1+ serialized cache file
.idea/caches/build_file_checksums.ser

### Intellij Patch ###
# Comment Reason: https://github.com/joeblau/gitignore.io/issues/186#issuecomment-215987721

# *.iml
# modules.xml
# .idea/misc.xml
# *.ipr

# Sonarlint plugin
.idea/sonarlint

### Java ###
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*

### Linux ###
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*

### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### Maven ###
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
.mvn/wrapper/maven-wrapper.jar

### Node ###
/build
/node_modules
/coverage
# Logs
logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json
# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
/coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

### NotepadPP ###
# Notepad++ backups #

### Python ###
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
nosetests.xml
coverage.xml
*.cover
.hypothesis/
.pytest_cache/

# Translations
*.mo
*.pot

# Django stuff:
local_settings.py
db.sqlite3

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
.python-version

# celery beat schedule file
celerybeat-schedule

# SageMath parsed files
*.sage.py

# Environments
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

### Python Patch ###
.venv/

### Python.VirtualEnv Stack ###
# Virtualenv
# http://iamzed.com/2009/05/07/a-primer-on-virtualenv/
[Bb]in
[Ii]nclude
[Ll]ib
[Ll]ib64
[Ll]ocal
[Ss]cripts
pyvenv.cfg
pip-selfcheck.json

### ReactNative ###
# React Native Stack Base

### ReactNative.Gradle Stack ###
.gradle
/build/

# Ignore Gradle GUI config
gradle-app.setting

# Avoid ignoring Gradle wrapper jar file (.jar files are usually ignored)
!gradle-wrapper.jar

# Cache of project
.gradletasknamecache

# # Work around https://youtrack.jetbrains.com/issue/IDEA-116898
# gradle/wrapper/gradle-wrapper.properties

### ReactNative.macOS Stack ###
# General

# Icon must end with two \r
Icon


# Thumbnails

# Files that might appear in the root of a volume

# Directories potentially created on remote AFP share

### ReactNative.Linux Stack ###

# temporary files which can be created if a process still has a handle open of a deleted file

# KDE directory preferences

# Linux trash folder which might appear on any partition or disk

# .nfs files are created when an open file is removed but is still being accessed

### ReactNative.Android Stack ###
# Built application files
*.apk
*.ap_
*.aab

# Files for the ART/Dalvik VM
*.dex

# Java class files

# Generated files
gen/

# Gradle files
.gradle/

# Local configuration file (sdk path, etc)

# Proguard folder generated by Eclipse
proguard/

# Log Files

# Android Studio Navigation editor temp files
.navigation/

# Android Studio captures folder
captures/

# IntelliJ
*.iml
.idea/workspace.xml
.idea/tasks.xml
.idea/gradle.xml
.idea/assetWizardSettings.xml
.idea/dictionaries
.idea/libraries
.idea/caches

# Keystore files
# Uncomment the following line if you do not want to check your keystore files in.
#*.jks

# External native build folder generated in Android Studio 2.2 and later
.externalNativeBuild

# Google Services (e.g. APIs or Firebase)
google-services.json

# Freeline
freeline.py
freeline/
freeline_project_description.json

# fastlane
fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots
fastlane/test_output
fastlane/readme.md

### ReactNative.Xcode Stack ###
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## User settings
xcuserdata/

## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)
*.xcscmblueprint
*.xccheckout

## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)
DerivedData/
*.moved-aside
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3

### ReactNative.Node Stack ###
# Logs

# Runtime data

# Directory for instrumented libs generated by jscoverage/JSCover

# Coverage directory used by tools like istanbul

# nyc test coverage

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)

# Bower dependency directory (https://bower.io/)

# node-waf configuration

# Compiled binary addons (https://nodejs.org/api/addons.html)

# Dependency directories

# TypeScript v1 declaration files

# Optional npm cache directory

# Optional eslint cache

# Optional REPL history

# Output of 'npm pack'

# Yarn Integrity file

# dotenv environment variables file

# parcel-bundler cache (https://parceljs.org/)

# next.js build output

# nuxt.js build output

# vuepress build output

# Serverless directories

### ReactNative.Buck Stack ###
buck-out/
.buckconfig.local
.buckd/
.buckversion
.fakebuckversion

### SublimeText ###
# Cache files for Sublime Text
*.tmlanguage.cache
*.tmPreferences.cache
*.stTheme.cache

# Workspace files are user-specific
*.sublime-workspace

# Project files should be checked into the repository, unless a significant
# proportion of contributors will probably not be using Sublime Text
# *.sublime-project

# SFTP configuration file
sftp-config.json

# Package control specific files
Package Control.last-run
Package Control.ca-list
Package Control.ca-bundle
Package Control.system-ca-bundle
Package Control.cache/
Package Control.ca-certs/
Package Control.merged-ca-bundle
Package Control.user-ca-bundle
oscrypto-ca-bundle.crt
bh_unicode_properties.cache

# Sublime-github package stores a github token in this file
# https://packagecontrol.io/packages/sublime-github
GitHub.sublime-settings

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

### Windows ###
# Windows thumbnail cache files
Thumbs.db
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

### Vault ###
.vlt


```

### Step-04: Integrating AEM with ReactJS
To achieve this integration two tools will be used:

- **aem-clientlib-generator** -- used to transform compiled CSS and JS files into an AEM client library
- **frontend-maven-plugin** - used to trigger NPM commands via a Maven build. This plugin will download/install Node and NPM locally for the project, ensuring consistency and making the project easy to integrate with a Continuous Integration/Continuous Deployment environment.

#### Step-04.01: Configuring aem-clientlibs-generator

````bash
cd react-app
npm install aem-clientlib-generator --save-dev
````

This will install the clientlib generator plugin and updates the package.json with the same.

#### Step-04.02: Clientlib Config file

- Create a **config file [clientlib.config.js]**, which will create a client library under the **ui.apps** which will include the assets such as ```.js and .css``` into the distribution folder

```javascript
module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,
 
    // path to the clientlib root folder (output)
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/sdspa/clientlibs",
 
    libs: {
        name: "react-app",
        allowProxy: true,
        categories: ["sdspa.react"],
        serializationFormat: "xml",
        jsProcessor: ["min:gcc"],
        assets: {
            js: [
                "build/static/**/*.js"
            ],
            css: [
                "build/static/**/*.css"
            ]
        }
    }
};
```

- Add the clientlibs to the build script under **package.json**, so that, the **clientlibs[js,css]** will be added to distribution
```json
{
  "name": "react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "react-scripts": "2.0.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build && clientlib --verbose",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "devDependencies": {
    "aem-clientlib-generator": "^1.4.1"
  }
}
```

### Step-05: Configuring frontend-maven-plugin
This will enhance the project capabilities and will allow us to treat/control the react app as a maven module. This way, the react app can be triggered using the parent POM file and allowing us to build the entire project with a single command.

- Add the following PARENT **POM.xml** file
```xml
<modules>
    <module>core</module>
    <!-- add React App -->
    <module>react-app</module>
    <module>ui.apps</module>
    <module>ui.content</module>
</modules>
```

- Add the frontend-maven-plugin to **PARENT POM.xml's properties**
```xml
 <properties>
    <aem.host>localhost</aem.host>
    <aem.port>4502</aem.port>
    <aem.publish.host>localhost</aem.publish.host>
    <aem.publish.port>4503</aem.publish.port>
    <sling.user>admin</sling.user>
    <sling.password>admin</sling.password>
    <vault.user>admin</vault.user>
    <vault.password>admin</vault.password>
 
    <!-- Update: Used by frontend-maven-plugin -->
    <frontend-maven-plugin.version>1.6</frontend-maven-plugin.version>
    <node.version>v10.8.0</node.version>
    <npm.version>6.2.0</npm.version>
    <!-- end update -->
 
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
</properties>
```

- Adding a **POM.xml** file under the **react-app** to facilitate the compiling of React app using maven

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
 
    <!-- ====================================================================== -->
    <!-- P A R E N T  P R O J E C T  D E S C R I P T I O N                      -->
    <!-- ====================================================================== -->
    <parent>
        <groupId>com.skydevops.aemspa</groupId>
        <artifactId>AEM-SPA</artifactId>
        <version>1.0-SNAPSHOT</version>
        <relativePath>../pom.xml</relativePath>
    </parent>

    <!-- ====================================================================== -->
    <!-- P R O J E C T  D E S C R I P T I O N                                   -->
    <!-- ====================================================================== -->
    <artifactId>AEM-SPA.react</artifactId>
    <packaging>pom</packaging>
    <name>SDSPA - React apps</name>
    <description>UI React application code for SDSPA</description>

 
    <!-- ====================================================================== -->
    <!-- B U I L D   D E F I N I T I O N                                        -->
    <!-- ====================================================================== -->
    <build>
    <plugins>
    <plugin>
        <groupId>com.github.eirslett</groupId>
        <artifactId>frontend-maven-plugin</artifactId>
        <version>${frontend-maven-plugin.version}</version>
 
        <executions>
 
        <execution>
            <id>install node and npm</id>
            <goals>
            <goal>install-node-and-npm</goal>
            </goals>
            <configuration>
            <nodeVersion>${node.version}</nodeVersion>
            <npmVersion>${npm.version}</npmVersion>
        </configuration>
        </execution>
 
        <execution>
            <id>npm install</id>
            <goals>
            <goal>npm</goal>
            </goals>
            <!-- Optional configuration which provides for running any npm command -->
            <configuration>
            <arguments>install</arguments>
            </configuration>
        </execution>
 
        <execution>
            <id>npm run build</id>
            <goals>
            <goal>npm</goal>
            </goals>
            <configuration>
            <arguments>run build</arguments>
            </configuration>
        </execution>
 
        </executions>
    </plugin>
    </plugins>
</build>
</project>
```

### Step-06: Execute the Maven command to compile and package
- Compile
```bash
mvn clean install
```

- Result:
```
[INFO] AEM-SPA 1.0-SNAPSHOT ............................... SUCCESS [  2.012 s]
[INFO] SDSPA - Core ....................................... SUCCESS [01:53 min]
[INFO] SDSPA - React apps ................................. SUCCESS [ 59.995 s]
[INFO] SDSPA - UI apps .................................... SUCCESS [  3.311 s]
[INFO] SDSPA - UI content 1.0-SNAPSHOT .................... SUCCESS [  0.801 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 03:02 min
[INFO] Finished at: 2018-10-24T16:40:10+05:30
[INFO] ------------------------------------------------------------------------
```


### Step-07: Installing the package to AEM Publish instance using maven profile
- Build and Deploy maven profile for Publish Instance
```xml
        <profile>
            <id>autoInstallPackagePublish</id>
            <activation>
                <activeByDefault>false</activeByDefault>
            </activation>
            <build>
                <pluginManagement>
                    <plugins>
                        <plugin>
                            <groupId>com.day.jcr.vault</groupId>
                            <artifactId>content-package-maven-plugin</artifactId>
                            <executions>
                                <execution>
                                    <id>install-package-publish</id>
                                    <goals>
                                        <goal>install</goal>
                                    </goals>
                                    <configuration>
                                        <targetURL>http://${aem.publish.host}:${aem.publish.port}/crx/packmgr/service.jsp</targetURL>
                                    </configuration>
                                </execution>
                            </executions>
                        </plugin>
                    </plugins>
                </pluginManagement>
            </build>
        </profile>
```
- **command**
```bash
mvn clean install -PautoInstallPackagePublish
```
- **Output**
```
[INFO]
[INFO] --- maven-install-plugin:2.5.2:install (default-install) @ AEM-SPA.ui.content ---
[INFO] Installing C:\sdwork\development\AEM-SPA\ui.content\target\AEM-SPA.ui.content-1.0-SNAPSHOT.zip to C:\Users\SKYDEVOPS\.m2\repository\com\skydevops\aemspa\AEM-SPA.ui.content\1.0-SNAPSHOT\AEM-SPA.ui.content-1.0-SNAPSHOT.zip
[INFO] Installing C:\sdwork\development\AEM-SPA\ui.content\pom.xml to C:\Users\SKYDEVOPS\.m2\repository\com\skydevops\aemspa\AEM-SPA.ui.content\1.0-SNAPSHOT\AEM-SPA.ui.content-1.0-SNAPSHOT.pom
[INFO]
[INFO] --- content-package-maven-plugin:0.5.1:install (install-package-publish) @ AEM-SPA.ui.content ---
[INFO] Installing AEM-SPA.ui.content (C:\sdwork\development\AEM-SPA\ui.content\target\AEM-SPA.ui.content-1.0-SNAPSHOT.zip) to http://localhost:4503/crx/packmgr/service.jsp
[INFO] skydevops/sdspa:AEM-SPA.ui.content, 1.0-SNAPSHOT (763540 bytes)
[INFO]     Created : Wed, 24 Oct 2018 16:50:34 +0530 by SKYDEVOPS
```
- **Result**
```
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO]
[INFO] AEM-SPA 1.0-SNAPSHOT ............................... SUCCESS [  0.792 s]
[INFO] SDSPA - Core ....................................... SUCCESS [  8.625 s]
[INFO] SDSPA - React apps ................................. SUCCESS [ 32.492 s]
[INFO] SDSPA - UI apps .................................... SUCCESS [ 14.940 s]
[INFO] SDSPA - UI content 1.0-SNAPSHOT .................... SUCCESS [  2.343 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:01 min
[INFO] Finished at: 2018-10-24T16:50:36+05:30
[INFO] ------------------------------------------------------------------------
```

### Step-08: Integrating React On the Page
Page_PATH:

- **ui.apps/src/main/content/jcr_root/apps/sdspa/components/structure/page/customheaderlibs.html**

```xml
<!--/*
Custom Headerlibs for React Site
*/-->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta property="cq:datatype" data-sly-test="${wcmmode.edit || wcmmode.preview}" content="JSON"/>
<meta property="cq:wcmmode" data-sly-test="${wcmmode.edit}" content="edit"/>
<meta property="cq:wcmmode" data-sly-test="${wcmmode.preview}" content="preview"/>
<meta property="cq:pagemodel_root_url"
    data-sly-use.page="com.skydevops.aemspa.core.models.HierarchyPage"
    content="${page.rootUrl}"/>
<sly data-sly-use.clientlib="/libs/granite/sightly/templates/clientlib.html">
<sly data-sly-call="${clientlib.css @ categories='sdspa.react'}"/>
```

- **ui.apps/src/main/content/jcr_root/apps/sdspa/components/structure/page/customfooterlibs.html**

```xml
<!--/*
Custom footer React libs
*/-->
<sly data-sly-use.clientLib="${'/libs/granite/sightly/templates/clientlib.html'}"></sly>
<sly data-sly-test="${wcmmode.edit || wcmmode.preview}"
    data-sly-call="${clientLib.js @ categories='cq.authoring.pagemodel.messaging'}"></sly>
<sly data-sly-call="${clientLib.js @ categories='sdspa.react'}"></sly>
```

- **ui.apps/src/main/content/jcr_root/apps/sdspa/components/structure/page/body.html**

```xml
<!--/*
- body.html
- includes div that will be targeted by SPA
*/-->
<div id="root"></div>
```

## License

- Licensed under the Apache License V2.0. 
- See the [LICENSE file](LICENSE) for details.

## Author Information

- You can find me on Twitter: [@skydevops](https://twitter.com/skydevops)
- You can find me on Facebook: [@skydevops](https://www.facebook.com/skydevops)

## Contributors

- Shashi Yebbare ([@skydevops](https://twitter.com/skydevops))