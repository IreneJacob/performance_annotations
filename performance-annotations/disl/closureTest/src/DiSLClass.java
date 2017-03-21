import ch.usi.dag.disl.annotation.After;
import ch.usi.dag.disl.annotation.Before;
import ch.usi.dag.disl.annotation.SyntheticLocal;
import ch.usi.dag.disl.annotation.ThreadLocal;
import ch.usi.dag.disl.marker.AbstractMarker;
import ch.usi.dag.disl.marker.BodyMarker;
import ch.usi.dag.disl.staticcontext.MethodStaticContext;

import java.util.Stack;

/**
 * Created by irenesjacob on 17.03.17.
 * a SimpleProfiler
 */
public class DiSLClass {
	@After(marker = BodyMarker.class, scope = " com.google.javascript.jscomp.parsing.JsDocInfoParser.*")
	public static void onMethodExit(MethodStaticContext methodStaticContext){
		// print the methods with the interesting signatures
		if (methodStaticContext.thisMethodSignature() != null) {
			System.out.println( methodStaticContext.thisMethodFullName() + "\t\t" +  methodStaticContext.thisMethodSignature() );
		}
	}
}
