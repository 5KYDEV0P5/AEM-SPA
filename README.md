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

```bash
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

Add the clientlibs to the build script under package.json, so that, the clientlibs[js,css] will be added to distribution
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

Add the following PARENT ```POM.xml``` file
```xml
<modules>
    <module>core</module>
    <!-- add React App -->
    <module>react-app</module>
    <module>ui.apps</module>
    <module>ui.content</module>
</modules>
```
Add the frontend-maven-plugin to PARENT POM.xml's properties
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

Adding a POM.xml file under the react-app to facilitate the compiling of React app using maven

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
    <artifactId>AEM-SPA.ui.apps</artifactId>
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