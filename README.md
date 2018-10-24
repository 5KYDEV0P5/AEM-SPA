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

Execute the following command with in the Maven project root directory

```bash
npx create-react-app react-app
```

### Step-04: Integrating AEM with ReactJS
To achieve this integration two tools will be used:

- aem-clientlib-generator -- used to transform compiled CSS and JS files into an AEM client library
- frontend-maven-plugin - used to trigger NPM commands via a Maven build. This plugin will download/install Node and NPM locally for the project, ensuring consistency and making the project easy to integrate with a Continuous Integration/Continuous Deployment environment.

#### Step-04.01: Configuring aem-clientlibs-generator

````bash
cd react-app
npm install aem-clientlib-generator --save-dev
````

This will install the clientlib generator plugin and updates the package.json with the same.

#### Step-04.02: Clientlib Config file

Create a ```config file [clientlib.config.js]```, which will create a client library under the ```ui.apps``` which will include the assets such as ```.js and .css``` into the distribution folder

```xml
module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,
 
    // path to the clientlib root folder (output)
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/wknd-events/clientlibs",
 
    libs: {
        name: "react-app",
        allowProxy: true,
        categories: ["wknd-events.react"],
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





## Dependencies

- clientlib-generator

## Example Code samples

### Clientlib-generator sample

```yaml
- hosts: all
  become: yes
  gather_facts: yes
  roles:
    - role: 5KYDEV0P5.common

- hosts: testservers
  become: yes
  gather_facts: yes
  roles:
    - role: 5KYDEV0P5.skydevops-mysql
```

## License

- Licensed under the Apache License V2.0. 
- See the [LICENSE file](LICENSE) for details.

## Author Information

- You can find me on Twitter: [@skydevops](https://twitter.com/skydevops)
- You can find me on Facebook: [@skydevops](https://www.facebook.com/skydevops)

## Contributors

- Shashi Yebbare ([@skydevops](https://twitter.com/skydevops))