//
//  DTLogging.m
//  DTXLoggingInfra
//
//  Created by Leo Natan (Wix) on 19/07/2017.
//  Copyright © 2017 Wix. All rights reserved.
//

@import Foundation;
#import "DTXLogging.h"

void __dtx_log(os_log_t log, os_log_type_t logType, NSString* prefix, NSString* format, ...)
{
	va_list argumentList;
	va_start(argumentList, format);
	NSString* message = [[NSString alloc] initWithFormat:format arguments:argumentList];
	va_end(argumentList);
	
	os_log_with_type(log, logType, "%{public}s%{public}s", prefix.UTF8String, message.UTF8String);
}
