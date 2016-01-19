<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
<PROJECT SID="-1" WS="http://www.smartface.io" dateLastResourceUpdated="010101000000" AppID="1701667150" AppName="Smartface Demo" CID="0" Ver="1.0.0" ScreenW="1080" ScreenH="1920" Dpi="388" FacebookAppUID="" FacebookAppSecret="" TwitterConsumerKey="" TwitterConsumerSecret="">
	<MAPAPI AndroidMapKey="" IosGeocodingKey="" />
	<ADMOB AdMobPublisherId="" AdMobTestUsage="0" />
	<DEVICEORIENTATIONS DeviceOrientationPortrait="1" DeviceOrientationUpsideDown="0" DeviceOrientationLandscapeLeft="0" DeviceOrientationLandscapeRight="0" />
	<ANDROIDPRODUCTKEY AndroidProductKey="" />
	<ANDROIDSENDERID AndroidSenderID="" />
	<APPLICATIONCACHESIZE ApplicationCacheSize="50" />
	<APPLICATIONNAME ApplicationName="smartface demo" />
	<NAVIGATIONBARUPDATE NavigationBarUpdate="1" />
	<RESOURCES>
	</RESOURCES>
	<LOGGING LogServerUrl="" MaxLogSize="30" LogError="0" LogWarning="0" LogDebug="0">
	</LOGGING>
	<PAGES>
		<PG ID="00000000-0000-0000-0000-000000000002" Type="0" UsesTemplatePage="0" TemplatePageID="00000000-0000-0000-0000-100000000001" Nm="SplashPage" BgClr="ccc243" BgTparent="0" BgPicName="defaultsplash.png" DefFoc="00000000-0000-0000-0000-100000000001" SldEffect="0" SldEase="0" Blr="0" ShwStatusBar="0" StatusBarTransparent="0" EnableTabBar="0" LockOrientation="0" PageOrientation="0" IsTemplatePage="0" IsSplashScreen="1" ShwNavigationBar="0" ShwActionBar="0" ShiftObjectsDown="0" TouchEnabled="1">
			<EDGE X="0" Y="0" W="1080" H="1920" />
			<POS Pos="3" SMode="2" />
			<BODY>
				<PIC ID="EFDE352E-2C57-4869-BC73-73B56B39112F" Nm="LogoImage" Vsb="1" Alpha="100" TouchEnabled="1">
					<LCT X="0" Y="0" W="1000%" H="500%" Z="0" Anc="3" />
					<POS Pos="15" SMode="1" EnableZoom="0" EnableScroll="0" EnableCache="1" />
					<DATA>
						<PRM Nm="Bind" Val="resources://logo.png" />
					</DATA>
				</PIC>
			</BODY>
			<EVENTS>
				<ONSHOW script="SplashPage_Self_OnShow(e);" />
			</EVENTS>
		</PG>
	</PAGES>
</PROJECT>
</SMARTFACEPROJECT>