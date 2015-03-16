package org.zywx.wbpalmstar.plugin.uexcall;

import org.zywx.wbpalmstar.base.ResoureFinder;
import org.zywx.wbpalmstar.engine.EBrowserView;
import org.zywx.wbpalmstar.engine.universalex.EUExBase;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.widget.Toast;

public class EUExCall extends EUExBase {
	private ResoureFinder finder;

	public EUExCall(Context context, EBrowserView inParent) {
		super(context, inParent);
		finder = ResoureFinder.getInstance(context);
	}

	/**
	 * params[0]-->电话号码
	 * 
	 * @param params
	 */
	public void call(String[] params) {
		if (params.length > 0) {
			try {
				Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:" + params[0]));// 直接拨打
				intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
				mContext.startActivity(intent);
			} catch (ActivityNotFoundException e) {
				Toast.makeText(mContext, finder.getString("can_not_find_suitable_app_perform_this_operation"),
						Toast.LENGTH_SHORT).show();

			} catch (SecurityException e) {
				Toast.makeText(mContext, finder.getString("no_permisson_declare"), Toast.LENGTH_SHORT).show();
			}
		}
	}

	/**
	 * params[0]--->电话号码
	 * 
	 * @param params
	 */
	public void dial(String[] params) {
		if (params.length > 0) {
			Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + params[0]));// 显示拨打界面
			try {
				startActivity(intent);
			} catch (ActivityNotFoundException e) {
				Toast.makeText(mContext, finder.getString("can_not_find_suitable_app_perform_this_operation"),
						Toast.LENGTH_SHORT).show();
			}
		}
	}

	@Override
	protected boolean clean() {

		return false;
	}
}
